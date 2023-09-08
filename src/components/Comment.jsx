export const Comment = ({ userName, commentText }) => {
  return (
    <div>
      <p>{commentText}</p>
      <h5>author: {userName}</h5>
    </div>
  );
};
