// src/pages/ModulePage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Intro from '../components/Intro.jsx';
import SceneMap from '../components/SceneMap.jsx';
import StatusBar from '../components/StatusBar.jsx';
import FooterNav from '../components/FooterNav.jsx';
import Modal from '../components/Modal.jsx';

const ModulePage = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    // TODO: dynamic import based on id
    import(`../data/module${id}/content.json`).then(m => setContent(m.default));
  }, [id]);

  if (!content) return null;

  const handleHotspot = (h) => setModal(h);

  return (
    <div className="module-page">
      <Header />
      <StatusBar hearts={3} xp={0} progress={0} />
      <Intro title={content.title} />
      <SceneMap
        image={require(`../assets/background.jpg`)}
        hotspots={content.hotspots}
        onHotspotClick={handleHotspot}
      />
      <FooterNav moduleId={id} />
      <Modal open={!!modal} onClose={() => setModal(null)}>
        <p>{modal?.descricao}</p>
        <p>{modal?.conceito}</p>
      </Modal>
    </div>
  );
};

export default ModulePage;
