import Spline from '@splinetool/react-spline/next';

export default async function CarItem() {

  return (
    <>
        <div className="mx-auto w-full scale-75 -translate-y-32 md:block hidden">
            <Spline
              scene="https://prod.spline.design/gIYrZB2f1bQ1CUMQ/scene.splinecode" 
            />
        </div>
    </>
  );
}
