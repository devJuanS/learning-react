import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(()=>{
    console.log(`effect: mouse follower ${ enabled ? 'activated' : 'deactivated'}.`);

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    }
    
    if ( enabled ) {
      window.addEventListener('pointermove', handlePointerMove);
    }

    return () => {
      console.log('clean up effect');
      setPosition({ x: 0, y: 0 });
      window.removeEventListener('pointermove', handlePointerMove);
    }
  }, [enabled]);

  // hide the pointer to only show the circle
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    }
  }, [enabled]);

  const handleButtonClick = () => setEnabled(!enabled);

  return (
    <>
      <div style={{
        position: 'absolute',
        top: -15,
        left: -15,
        height: 30,
        width: 30,
        border: '1px solid #555',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: 0.8,
        pointerEvents: 'none',
        transform: `translate(${ position.x }px, ${ position.y }px)`
      }}
      />
      <button onClick={ handleButtonClick }>
        { enabled ? 'Deactivate' : 'Activate'} mouse follower
      </button>
    </>
  );
}

function App() {

  return (
    <>
      <h2>Mouse Follower</h2>
      <FollowMouse />
    </>
  )
}

export default App
