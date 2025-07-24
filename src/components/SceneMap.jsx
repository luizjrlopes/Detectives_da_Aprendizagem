// src/components/SceneMap.jsx
import React from 'react';

const SceneMap = ({ image, hotspots, onHotspotClick }) => (
  <div className="scene-map" style={{ position: 'relative' }}>
    <img src={image} alt="scene" style={{ width: '100%' }} />
    {hotspots.map((h, i) => (
      <button
        key={i}
        className="hotspot"
        style={{ position: 'absolute', left: h.x, top: h.y }}
        onClick={() => onHotspotClick(h)}
      />
    ))}
  </div>
);

export default SceneMap;
