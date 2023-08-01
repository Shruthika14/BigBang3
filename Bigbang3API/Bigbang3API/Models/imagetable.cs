

    using System;
    using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

    namespace Bigbang3API.Models
    {
        public partial class Imagetbl
    {
        [Key]
        public int Imgid { get; set; }

        public string? Imgname { get; set; }


    }
}
