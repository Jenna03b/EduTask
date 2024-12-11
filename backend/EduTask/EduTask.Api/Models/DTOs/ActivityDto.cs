namespace EduTask.Api.Models.DTOs
{
    public class ActivityDto
    {
        public int Id { get; set; }
        public string Type { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Topic { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;
        public ProgressStatus Progress { get; set; }
        public DateTime Date { get; set; }
    }
}
