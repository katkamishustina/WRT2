namespace WRT.Models
{
    public class Notes
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedDate { get; }
        public string? Text {  get; set; }

    }
}
