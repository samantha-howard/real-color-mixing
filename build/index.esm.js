import { A as ActiveRouter } from './active-router-23c563d5.js';
import './match-path-02f6df12.js';
import './index-95755a3f.js';
import './location-utils-6419c2b3.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
