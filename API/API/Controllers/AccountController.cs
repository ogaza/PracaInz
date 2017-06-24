using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using API.Models;
using API.Repositories;

namespace API.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        private readonly AuthRepository _repo;
        private readonly PictureRepository _pictureRepository;

        public AccountController()
        {
            _repo = new AuthRepository();
            _pictureRepository = new PictureRepository();
        }

        [AllowAnonymous]
        [Route("Register")]
        //public async Task<IHttpActionResult> Register(User userModel)
        public IHttpActionResult Register(User userModel)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            // IdentityResult result = _repo.RegisterUser(userModel);
            _repo.RegisterUser(userModel);

            //IHttpActionResult errorResult = GetErrorResult(result);

            //if (errorResult != null)
            //{
            //    return errorResult;
            //}

            return Ok();
        }

        [AllowAnonymous]
        [Route("Photo")]
        [HttpPost]
        public async Task<IHttpActionResult> Photo()
        {
            if (!Request.Content.IsMimeMultipartContent())
                throw new HttpResponseException(
                    Request.CreateResponse(HttpStatusCode.NotAcceptable,
                        "This request is not properly formatted"));

            var provider = new MultipartMemoryStreamProvider();
           
            await Request.Content.ReadAsMultipartAsync(provider);

            var userId = 1;

            // Contents has as many files as the number of uploaded files by the client
            foreach (HttpContent content in provider.Contents)
            {
                //now read individual part into STREAM
                using (Stream stream = await content.ReadAsStreamAsync())
                {                    
                    if (stream.Length == 0) continue;

                    // Guid guid = Guid.NewGuid();

                    using (var rdr = new BinaryReader(stream))
                    {
                        byte[] fileData = rdr.ReadBytes((int)stream.Length);

                        _pictureRepository.Save(fileData, userId);
                    }                   
                }
            }

            return Ok();
        }

        [AllowAnonymous]
        [Route("Photo/{id}")]
        [HttpGet]
        public HttpResponseMessage GetPhoto(int id)
        {
            byte[] data = _pictureRepository.Get(id);

            //var result = new HttpResponseMessage(HttpStatusCode.OK)
            //{
            //    Content = new ByteArrayContent(data)
            //}; 

            /*
             * Alternative solution using StreamContent
            */

            var stream = new MemoryStream(data);

            // stream.Position = 0;

            var result = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StreamContent(stream)
            };

            result.Content.Headers.ContentDisposition =
                new ContentDispositionHeaderValue("attachment")
                {
                    FileName = "profile.jpg"
                };

            result.Content.Headers.ContentType =
                new MediaTypeHeaderValue("application/octet-stream");

            // result.Content.Headers.ContentLength = stream.Length;

            result.Headers.CacheControl = new CacheControlHeaderValue {NoCache = true};

            return result;
        }

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        _repo.Dispose();
        //    }

        //    base.Dispose(disposing);
        //}

        //private IHttpActionResult GetErrorResult(IdentityResult result)
        //{
        //    if (result == null)
        //    {
        //        return InternalServerError();
        //    }

        //    if (!result.Succeeded)
        //    {
        //        if (result.Errors != null)
        //        {
        //            foreach (string error in result.Errors)
        //            {
        //                ModelState.AddModelError("", error);
        //            }
        //        }

        //        if (ModelState.IsValid)
        //        {
        //            // No ModelState errors are available to send, so just return an empty BadRequest.
        //            return BadRequest();
        //        }

        //        return BadRequest(ModelState);
        //    }

        //    return null;
        //}
    }
}
