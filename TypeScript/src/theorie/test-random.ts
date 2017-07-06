import { ok as assertTrue } from 'assert';
import { getRandom } from './random';

assertTrue(typeof getRandom() === 'number');