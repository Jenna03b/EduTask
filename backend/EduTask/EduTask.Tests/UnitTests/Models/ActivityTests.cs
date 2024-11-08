using EduTask.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduTask.Tests.UnitTests.Models
{
    public class ActivityTests
    {
        [Fact]
        public void Shoud_create_new_activity_When_data_is_valid()
        {
            // arrange
            var type = "Meeting";
            var subject = "Project Discussion";
            var date = DateTime.Now.AddDays(1);
            var topic = "Project Alpha";
            var notes = "Initial planning";
            var progress = ProgressStatus.ToDo;

            // act
            var activity = new Activity(type, subject, topic, notes, progress, date);

            // assert
            Assert.NotNull(activity);
            Assert.Equal(type, activity.Type);
            Assert.Equal(subject, activity.Subject);
            Assert.Equal(date, activity.Date);
            Assert.Equal(topic, activity.Topic);
            Assert.Equal(notes, activity.Notes);
            Assert.Equal(progress, activity.Progress);
        }

        [Fact]
        public void Shoud_throw_exception_When_date_is_in_past()
        {
            // arrange
            var type = "Meeting";
            var subject = "Project Discussion";
            var date = DateTime.Now.AddDays(-1);
            var topic = "Project Alpha";
            var notes = "Initial planning";
            var progress = ProgressStatus.ToDo;

            // act & assert
            ArgumentException ex = Assert.Throws<ArgumentException>(() => new Activity(type, subject, topic, notes, progress, date));
            Assert.Equal("Date cannot be in the past", ex.Message);
        }

        [Fact]
        public void Shoud_set_progress_status()
        {
            // arrange
            var activity = new Activity("Task", "Write Report", "Report Q1", "Complete draft", ProgressStatus.ToDo, DateTime.Now.AddDays(2));

            // act
            activity.SetProgress(ProgressStatus.Done);

            // assert
            Assert.Equal(ProgressStatus.Done, activity.Progress);
        }

        [Fact]
        public void Shoud_throw_exception_When_type_is_invalid()
        {
            // arrange
            var activity = new Activity("Valid Type", "Subject", "Topic", "Notes", ProgressStatus.ToDo, DateTime.Now.AddDays(1));

            // act & assert
            ArgumentException ex = Assert.Throws<ArgumentException>(() => activity.SetType("ab"));
            Assert.Equal("Type min length is 3", ex.Message);
        }

        [Fact]
        public void Shoud_throw_exception_When_notes_exceed_max_length()
        {
            // arrange
            var longNotes = new string('a', 501);
            var activity = new Activity("Task", "Report", "Topic", "Short notes", ProgressStatus.ToDo, DateTime.Now.AddDays(1));

            // act & assert
            ArgumentException ex = Assert.Throws<ArgumentException>(() => activity.SetNotes(longNotes));
            Assert.Equal("Notes max length is 500 characters", ex.Message);
        }
    }
}
