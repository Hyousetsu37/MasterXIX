import type { LineDto, LineEntity, LineState } from '../model/type';

const VALID_STATES: LineState[] = ['Pendiente', 'Valido'];

export const mapLlineDtoToEntity = (line: LineDto): LineEntity => {
	const isValidState = VALID_STATES.includes(line.state as LineState);
	const state: LineState = isValidState ? (line.state as LineState) : 'Pendiente';
	const amount = Number(line.amount);
	return {
		amount: Number.isNaN(amount) ? 0 : amount,
		description: line.description,
		id: line.id,
		state: state,
	};
};
