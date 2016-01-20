import {model, value, dom} from 'duet';
import Counter from './Counter';

export default function app(start) {

    function appView(state) {
        return dom`
            <div>
                <h1>Duet Example</h1>
                ${Counter(state)}
            </div>
        `;
    }

    const appModel = model({
        count: value(0)
    });

    start(appView, appModel);
};
