import Select from 'react-select'

const options = [
  { value: 'openSource', label: 'Open Source' },
  { value: 'AIML', label: 'AI/ML' },
  { value: 'collegeLife', label: 'College Life' },
  { value: 'placements', label: 'Placements' },
  { value: 'interviews', label: 'Interviews' },
  { value: 'Startups', label: 'Start Ups' }
]

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    borderColor: state.isFocused ? 'blue' : '#ccc',
    boxShadow: state.isFocused ? '0 0 0 1px #007BFF' : null,
    '&:hover': {
      borderColor: '#007BFF'
    },
    borderRadius: '10px'
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: 'cursive',
    backgroundColor: state.isSelected ? '#F1516C' : '#ffffff',
    color: state.isSelected ? '#ffffff' : '#333',
    '&:hover': {
      backgroundColor: '#F1516C',
      color: '#ffffff'
    },
    borderRadius: '10px'
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontFamily: 'cursive'
  })
}

const CategoryOptions = ({ setCatSlug }) => (
  <Select
    styles={customStyles}
    options={options}
    onChange={option => setCatSlug(option.value)}
  />
)

export default CategoryOptions
