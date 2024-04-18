const courseStatus = ["All", "Active", "Completed", "Uncoming"];
function Header() {
  return (
    <div>
      <h1>Courses (3)</h1>
      <div className="course-status">
        {courseStatus.map((t) => (
          <div key={t}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default Header;
