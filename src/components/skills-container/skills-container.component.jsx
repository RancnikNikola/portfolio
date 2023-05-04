

const HorizontalScrollableDiv = ({ children }) => {
  return (
    <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
      {children}
    </div>
  );
}
export default HorizontalScrollableDiv;
