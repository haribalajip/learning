import useCounter from '../../hooks/useCounter';

function ForwardCounter () {
  const count = useCounter();
  return (
    <div>{count}</div>
  )
};

export default ForwardCounter;