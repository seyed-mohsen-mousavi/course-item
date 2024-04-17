function CourseCard() {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src="{data}" alt="image-1" />
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title"></p>
            <p className="desc"></p>
          </div>
          <span className="rate"></span>
        </div>
        <div className="course-item__footer">
          <div className="tags">
            <span className="badge badge--secondary">langouse</span>
            <span className="badge badge--secondary">langouse</span>
          </div>
          <div className="caption">
            <div className="date">
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              })}
            </div>
            <span className="badge badge--primary">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
