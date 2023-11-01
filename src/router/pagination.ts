import { FindOptions, Model, ModelStatic } from "sequelize";

export interface FindOptionsWithPagination extends FindOptions {
	page: number;
	size: number;
}
export function paginate<M extends Model>(
	model: ModelStatic<M>,
	options?: Partial<FindOptionsWithPagination>
) {
	const page = options.page ?? 1;
	const size = options.size ?? 10;
	delete options.page;
	delete options.size;

	const offset = (page - 1) * size;
	const limit = size;

	const updatedOptions: FindOptions = {
		...options,
		offset,
		limit,
	};
	return model.findAndCountAll(updatedOptions);
}
