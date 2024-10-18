import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Silkscreen from '../src/pages/Silkscreen';
import Silicone from '../src/pages/Silicone';
import Dtf from '../src/pages/Dtf';
import Laser from '../src/pages/Laser';
import OffsetPhotoprint from '../src/pages/OffsetPhotoprint';

// Importing nested routes
import DtfTransfer from '../src/pages/dtf/dtf-transfer';
import LaserGlitter from '../src/pages/lasercut/glitter';
import LaserHologram from '../src/pages/lasercut/hologram';
import LaserReflective from '../src/pages/lasercut/reflective';
import LaserSpecialEffects from '../src/pages/lasercut/specialeffect';
import MaterialsInk from '../src/pages/materials/ink';
import MaterialsMachines from '../src/pages/materials/machines';
import OffsetAntiMigration from '../src/pages/offset/antimigration';
import OffsetGlitter from '../src/pages/offset/glitter';
import OffsetMetallicPearl from '../src/pages/offset/metallicpearl';
import OffsetPaper from '../src/pages/offset/paper';
import OffsetReflective from '../src/pages/offset/reflective';
import SerigraphFlock from '../src/pages/serigraph/flock';
import SerigraphFoil from '../src/pages/serigraph/foil';
import SerigraphGlitter from '../src/pages/serigraph/glitter';
import SerigraphGlowing from '../src/pages/serigraph/glowing';
import SerigraphMultistretch from '../src/pages/serigraph/multistretch';
import SerigraphPuffy from '../src/pages/serigraph/puffy';
import SerigraphReflective from '../src/pages/serigraph/reflective';
import SerigraphTaffeta from '../src/pages/serigraph/taffeta';
import Silicone3DHighDensity from '../src/pages/silicone/3dhighdensity';
import Silicone3DLogo from '../src/pages/silicone/3dlogo';
import SiliconeFlat from '../src/pages/silicone/flat';
import SiliconeInjection from '../src/pages/silicone/injection';
import FAQ from '../src/pages/faq';
import Contact from '../src/pages/Contact';
import About from '../src/pages/About';
import Terms from '../src/pages/Terms';
import PrivacyPolicy from '../src/pages/PrivacyPolicy';
import LegalNotice from '../src/pages/LegalNotice';
import Film from '../src/pages/materials/film';
import Powder from '../src/pages/materials/powder';
import Materials from '../src/pages/Materials';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/silkscreen" element={<Silkscreen />} />
        <Route path="/silicone" element={<Silicone />} />
        <Route path="/dtf" element={<Dtf />} />
        <Route path="/lasercut" element={<Laser />} />
        <Route path="/offset-photoprint" element={<OffsetPhotoprint />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />

        

        {/* DTF Routes */}
        <Route path="/dtf/transfer" element={<DtfTransfer />} />

        {/* LaserCut Routes */}
        <Route path="/lasercut/glitter" element={<LaserGlitter />} />
        <Route path="/lasercut/hologram" element={<LaserHologram />} />
        <Route path="/lasercut/reflective" element={<LaserReflective />} />
        <Route path="/lasercut/specialeffects" element={<LaserSpecialEffects />} />

        {/* Materials Routes */}
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/ink" element={<MaterialsInk />} />
        <Route path="/materials/machines" element={<MaterialsMachines />} />
        <Route path="/materials/film" element={<Film />} />
        <Route path="/materials/powder" element={<Powder/>} />

        {/* Offset Routes */}
        <Route path="/offset/antimigration" element={<OffsetAntiMigration />} />
        <Route path="/offset/glitter" element={<OffsetGlitter />} />
        <Route path="/offset/metallicpearl" element={<OffsetMetallicPearl />} />
        <Route path="/offset/paper" element={<OffsetPaper />} />
        <Route path="/offset/reflective" element={<OffsetReflective />} />

        {/* Serigraph Routes */}
        <Route path="/serigraph/flock-multicolor" element={<SerigraphFlock />} />
        <Route path="/serigraph/foil" element={<SerigraphFoil />} />
        <Route path="/serigraph/glitter" element={<SerigraphGlitter />} />
        <Route path="/serigraph/glowing-dark" element={<SerigraphGlowing />} />
        <Route path="/serigraph/multistretch" element={<SerigraphMultistretch />} />
        <Route path="/serigraph/puffy" element={<SerigraphPuffy />} />
        <Route path="/serigraph/reflective" element={<SerigraphReflective />} />
        <Route path="/serigraph/taffeta" element={<SerigraphTaffeta />} />

        {/* Silicone Routes */}
        <Route path="/silicone/3dhighdensity" element={<Silicone3DHighDensity />} />
        <Route path="/silicone/3dlogo" element={<Silicone3DLogo />} />
        <Route path="/silicone/flat" element={<SiliconeFlat />} />
        <Route path="/silicone/injection" element={<SiliconeInjection />} />

        <Route path="/tos" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
      </Routes>
    </Router>
  );
}

export default App;
