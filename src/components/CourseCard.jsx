function CourseCard({ course }) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt={"image_" + course.title} />
      </div>
      <div className="course-item__detail">
        <CourseItemBody
          description={course.description}
          title={course.title}
          rate={course.rate}
        />
        <CourseItemFooter
          tags={course.tags}
          start={course.start}
          status={course.status}
        />
      </div>
    </div>
  );
}

export default CourseCard;

function CourseItemBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title"><a href="">{title}</a></p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">{rate}</span>
    </div>
  );
}
function CourseItemFooter({ tags, start, status }) {
  return (
    <div className="course-item__footer">
      <div className="tags">
        {tags.map((t) => (
          <span className="badge badge--secondary" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">
          {new Date(start).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
            day: "numeric",
          })}
        </div>
        <span className="badge badge--primary">{status}</span>
      </div>
    </div>
  );
}
