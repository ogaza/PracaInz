using System.Security.Claims;
using System.Threading.Tasks;
using API.Repositories;
using Microsoft.Owin.Security.OAuth;

namespace API.Providers
{
    public class SimpleAuthorizationServerProvider: OAuthAuthorizationServerProvider
    {
        public override Task ValidateClientAuthentication(
            OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
            return Task.FromResult(0);
        }

        public override Task GrantResourceOwnerCredentials(
            OAuthGrantResourceOwnerCredentialsContext context)
        {

            context.OwinContext.Response.Headers.
                Add("Access-Control-Allow-Origin", new[] {"*"});

            //using (AuthRepository _repo = new AuthRepository())
            //{
            var repo = new AuthRepository();

            var user = repo.FindUser(context.UserName, context.Password);

            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return Task.FromResult(0);
            }
            //}

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            identity.AddClaim(new Claim("sub", context.UserName));
            identity.AddClaim(new Claim("role", "user"));

            context.Validated(identity);

            return Task.FromResult(0);
        }
    }
}