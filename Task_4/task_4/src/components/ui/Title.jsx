import '../../styles/title.scss';

function Title({
  heading,
  description = 'The latest industry news, interviews, technologies, and resources.',
}) {
  return (
    <div className="page-title">
      <p className="page-title__label">Our blog</p>
      <h2 className="page-title__heading">{heading}</h2>
      {description && <p className="page-title__subtitle">{description}</p>}
    </div>
  );
}

export default Title;
