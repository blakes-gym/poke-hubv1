import images from '../utils/imageUrls';

export default function Chevron() {
  return (
    <div className='d-flex justify-content-center align-items-center mr-2'>
      <img
        src={images.chevron}
        style={{
          height: 16,
          width: 'auto',
          opacity: 0.8,
          userSelect: 'none',
          cursor: 'pointer'
        }}
      />
    </div>
  );
}
