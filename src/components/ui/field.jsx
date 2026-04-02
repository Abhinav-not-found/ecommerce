const Field = ({ children, name, error }) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='mb-1 first-letter:uppercase'>
        {name}
      </label>
      {children}
      {error && <p className='text-red-500 text-sm'>{error.message}</p>}
    </div>
  )
}

export default Field
