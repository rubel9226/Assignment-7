import React from 'react';

const StatsPage = () => {
    return (
        <div className='min-h-[55vh]'>
            <h2 className="text-5xl">Stats Page</h2>
            <div>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;