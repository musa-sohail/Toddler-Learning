// Practice.jsx
import React, { useState, useRef, useEffect } from 'react';

const Practice = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [color, setColor] = useState('black');
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(3);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    setCtx(context);
  }, [color, brushSize]);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleEraser = () => {
    setColor('white');
  };

  const handleBrushSizeChange = (event) => {
    setBrushSize(parseInt(event.target.value));
  };

  const handleMouseDown = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const handleMouseMove = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    ctx.closePath();
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center">
        <div className="w-full lg:w-3/4">
          <h1 className="text-2xl font-semibold text-sky-600 mb-4">Practice Your Learning</h1>
          <canvas className='bg-white'
            ref={canvasRef}
            width="1150" // Set canvas width to 100% of its container
            height={400}
            style={{ borderRadius: '10px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            cursor={isDrawing ? 'url(https://www.rw-designer.com/cursor-extern.php?id=127606), auto' : 'default'}
          />
          <div className="flex mt-4 justify-between items-center">
            <div className="flex items-center">
              <button className="w-10 h-10 rounded-full bg-black mr-2" onClick={() => handleColorChange('black')} />
              <button className="w-10 h-10 rounded-full bg-gray-400 mr-2" onClick={() => handleColorChange('gray')} />
              <button className="w-10 h-10 rounded-full bg-pink-500 mr-2" onClick={() => handleColorChange('pink')} />
              <button className="w-10 h-10 rounded-full bg-white border border-gray-500 mr-2" onClick={handleEraser} />
            </div>
            <div className="flex items-center">
              <input type="range" min="1" max="20" value={brushSize} onChange={handleBrushSizeChange} className="w-20" />
              <div className="ml-2 bg-white p-2 rounded-md border border-gray-300">
                Size: {brushSize}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
