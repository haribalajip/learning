import useCounter from '../../hooks/useCounter';

function ForwardCounter () {
  const count = useCounter(false);
  return (
    <div>{count}</div>
  )
};

export default ForwardCounter;