using EduTask.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduTask.Tests.UnitTests.Models
{
    public class UserTests
    {
        [Fact]
        public void Shoud_Create_User()
        {
            var user = new User();
        }
    }
}
