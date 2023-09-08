import { Comment } from './Comment';

export const CommentList = ({ array }) => {
  return (
    <div>
      <p>Liczba komentarzy: {array.length}</p>
      {array.map((el, i) => (
        <li key={i}>
          <p>{i + 1}</p>
          <Comment userName={el.userName} commentText={el.commentText} />
        </li>
      ))}
    </div>
  );
};
