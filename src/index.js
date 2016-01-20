import './styles';
import duet from 'duet';
import app from './app';

duet(app, 'body', {
/*
    isDebug: true,
    forceSingleThread: true
*/
});
