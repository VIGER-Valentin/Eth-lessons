import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x071Bc445Cd4160dC3a63eB2459F7A344a326A85b"
);

export default instance;