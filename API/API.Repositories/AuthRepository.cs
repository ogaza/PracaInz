using API.Models;

namespace API.Repositories
{
    public class AuthRepository
    {
        public void RegisterUser(User user)
        {

        }

        public User FindUser(string name, string password)
        {
            return new User {Name = name, Password = password};
        }

        /*
        private AuthContext _ctx;
 
        private UserManager<IdentityUser> _userManager;
 
        public AuthRepository()
        {
            _ctx = new AuthContext();
            _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_ctx));
        }
 
        public async Task<IdentityResult> RegisterUser(UserModel userModel)
        {
            IdentityUser user = new IdentityUser
            {
                UserName = userModel.UserName
            };
 
            var result = await _userManager.CreateAsync(user, userModel.Password);
 
            return result;
        }
 
        public async Task<IdentityUser> FindUser(string userName, string password)
        {
            IdentityUser user = await _userManager.FindAsync(userName, password);
 
            return user;
        }
 
        public void Dispose()
        {
            _ctx.Dispose();
            _userManager.Dispose();
 
        } 
        
         */
    }
}
