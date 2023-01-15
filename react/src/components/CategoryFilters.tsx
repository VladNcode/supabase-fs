import { CATEGORIES } from '../helpers/constraints';
import { CategoryFilterProps } from '../types/props';

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ setFactCategory }) => {
	const selectAllCategories = () => {
		setFactCategory('all');
	};

	const buttons = CATEGORIES.map(({ name, color }) => {
		const onClick = () => {
			setFactCategory(name);
		};

		const style = {
			backgroundColor: color,
		};

		return (
			<li key={name} className="category">
				<button onClick={onClick} style={style} className="btn btn-category">
					{name.toUpperCase()}
				</button>
			</li>
		);
	});

	return (
		<aside>
			<ul className="category-buttons">
				<li className="category">
					<button className="btn btn-all-categories" onClick={selectAllCategories}>
						All
					</button>
				</li>

				{buttons}
			</ul>
		</aside>
	);
};
