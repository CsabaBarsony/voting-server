import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', () => {
    describe('A List', () => {
        it('is immutable', () => {
            let state = List.of('Trainspotting', '28 Days Later');
            let nextState = state.push('Sunshine');

            expect(nextState).to.equal(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine'
            ));
            expect(state).to.equal(List.of(
                'Trainspotting',
                '28 Days Later'
            ));
        });

    });

});