namespace EduTask.Api.Models.DTOs
{
    public class UpdateActivityDto
    {
        public string Type { get; set; }
        public string Subject { get; set; }
        public string Topic { get; set; }
        public string Notes { get; set; }
        public ProgressStatus Progress { get; set; }
        public DateTime Date { get; set; }
    }
}
