import { Select } from 'antd';
const { Option, OptGroup } = Select;

interface TeamSelectProps {
	handleChange(id: string): void;
}
export default function TeamSelect(props: TeamSelectProps) {
	const { handleChange } = props;
	return (
		<>
			<h2>Select a Team</h2>
			<Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
				<OptGroup label="My Teams">
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
				</OptGroup>
				<OptGroup label="All Teams">
					<Option value="Yiminghe">yiminghe</Option>
				</OptGroup>
			</Select>
		</>
	);
}
