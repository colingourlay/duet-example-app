import './styles';
import duet from 'duet';
import app from './app';

duet(app, 'body', {
    // forceSingleThread: true,
    isDebug: true
});
