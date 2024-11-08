using System;
using System.Diagnostics;

namespace EduTask.Api.Models
{
    public enum ProgressStatus
    {
        ToDo,
        InProgress,
        Done
    }
    public class Activity
    {
        
        public string Type { get; private set; }
        public string Subject { get; private set; }
        public string Topic { get; private set; }
        public string Notes { get; private set; }
        public ProgressStatus Progress { get; private set; }
        public DateTime Date { get; private set; }

        public Activity(string type, string subject, string topic, string notes, ProgressStatus progress, DateTime date)
        {
            SetType(type);
            SetSubject(subject);
            SetDate(date);
            SetTopic(topic);
            SetNotes(notes);
            SetProgress(progress);
        }

        public void SetType(string type)
        {
            if (string.IsNullOrEmpty(type))
                throw new ArgumentException("Type cannot be empty");
            if (type.Length <= 3)
                throw new ArgumentException("Type min length is 3");

            Type = type;
        }

        public void SetSubject(string subject)
        {
            if (string.IsNullOrEmpty(subject))
                throw new ArgumentException("Subject cannot be empty");
            if (subject.Length <= 3)
                throw new ArgumentException("Subject min length is 3");

            Subject = subject;
        }

        public void SetDate(DateTime date)
        {
            if (date < DateTime.Now)
                throw new ArgumentException("Date cannot be in the past");

            Date = date;
        }

        public void SetTopic(string topic)
        {
            if (string.IsNullOrEmpty(topic))
                throw new ArgumentException("Topic cannot be empty");
            if (topic.Length <= 3)
                throw new ArgumentException("Topic min length is 3");

            Topic = topic;
        }

        public void SetNotes(string notes)
        {
            if (notes.Length > 500)
                throw new ArgumentException("Notes max length is 500 characters");

            Notes = notes;
        }

        public void SetProgress(ProgressStatus progress)
        {
            Progress = progress;
        }
    }
}
