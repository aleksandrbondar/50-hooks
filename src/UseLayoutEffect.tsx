import { useState, useLayoutEffect, useRef } from 'react';

const LayoutEffect = () => {
  const [size, setSize] = useState(0);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      setSize(textRef.current.scrollHeight);
    }
  }, []);

  window.onresize = () => {
    if (textRef.current) {
      setSize(textRef.current.scrollHeight);
    }
  }
  function showText() {
    setShow(!show);
  }
  function showText2() {
    setShow2(!show2);
  }
  return (
    <div style={{ padding: '20px', margin: '20px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <h1 style={{ textAlign: 'center' }}>Use layout effect</h1>
      <p>Нарешті я знаю як анімувати непередбачувані по висоті елементи</p>
      <button style={{ padding: '10px', marginRight: '10px' }} onClick={showText}>Show text</button>
      <button style={{ padding: '10px' }} onClick={showText2}>Show text2</button>
      <div ref={textRef} style={{
        backgroundColor: 'lightcoral',
        transition: 'height 1s ease',
        height: `${show ? size : 0}px`,
        overflow: 'hidden',
        marginTop: '10px'
      }}>
        <p>This is a box with size {size}px</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum facilis fugit harum iste nobis
          quas quidem. Aut culpa deleniti dicta eligendi illo incidunt ipsa nesciunt quidem quisquam voluptas. Enim?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto asperiores beatae cupiditate
          dolor eligendi enim est eveniet, fugit harum ipsa nemo, nostrum quis quo, soluta temporibus vero voluptatem
          voluptatum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur facere mollitia nemo nesciunt
          nihil odio quasi similique. Blanditiis cum eius esse fuga, libero odit provident quas quisquam suscipit
          tenetur.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto quisquam ullam! Atque beatae est
          excepturi maiores minima porro repudiandae voluptate. Aliquam dignissimos ea ipsa maiores. Accusamus
          asperiores hic qui.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur expedita illum ipsa pariatur rem
          sint tempora voluptatem. Alias aliquam aperiam blanditiis delectus impedit in laudantium nihil quaerat, quidem
          velit.
        </p>
      </div>
      <div ref={textRef} style={{
        backgroundColor: 'lightcoral',
        transition: 'height 1s ease, clip-path 1s ease',
        height: `${show2 ? size : 0}px`,
        overflow: 'hidden',
        marginTop: '10px',
        clipPath: `${show2 ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 0, 0 0, 0 0, 0 0)'}`,
      }}>
        <p>This is a box with size {size}px</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum facilis fugit harum iste nobis
          quas quidem. Aut culpa deleniti dicta eligendi illo incidunt ipsa nesciunt quidem quisquam voluptas. Enim?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto asperiores beatae cupiditate
          dolor eligendi enim est eveniet, fugit harum ipsa nemo, nostrum quis quo, soluta temporibus vero voluptatem
          voluptatum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur facere mollitia nemo nesciunt
          nihil odio quasi similique. Blanditiis cum eius esse fuga, libero odit provident quas quisquam suscipit
          tenetur.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto quisquam ullam! Atque beatae est
          excepturi maiores minima porro repudiandae voluptate. Aliquam dignissimos ea ipsa maiores. Accusamus
          asperiores hic qui.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur expedita illum ipsa pariatur rem
          sint tempora voluptatem. Alias aliquam aperiam blanditiis delectus impedit in laudantium nihil quaerat, quidem
          velit.
        </p>
      </div>
    </div>
  );
};

export default LayoutEffect;