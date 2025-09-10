import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WifiIcon from '@mui/icons-material/Wifi';
import PeopleIcon from '@mui/icons-material/People';
import PetsIcon from '@mui/icons-material/Pets';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HotTubIcon from '@mui/icons-material/HotTub';
import WorkIcon from '@mui/icons-material/Work';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export const highlightIconMap: Record<string, JSX.Element> = {
  Ocean: <BeachAccessIcon fontSize="small" />,
  Wifi: <WifiIcon fontSize="small" />,
  People: <PeopleIcon fontSize="small" />,
  Pets: <PetsIcon fontSize="small" />,
  Fireplace: <FireplaceIcon fontSize="small" />,
  Snow: <AcUnitIcon fontSize="small" />,
  HotTub: <HotTubIcon fontSize="small" />,
  Work: <WorkIcon fontSize="small" />,
  City: <LocationCityIcon fontSize="small" />,
};