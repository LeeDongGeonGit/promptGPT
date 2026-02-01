export const activeEnter = (e, callback) => {
    if (e.key === "Enter") {
        e.preventDefault(); 
      callback(); // Enter 키를 눌렀을 때 callback 실행
    }
  };
 export const handleChange = (event,setFormData) => {
    const { name, value } = event.target;
 
    if(name=== "start" || name === "end"){
        if(!value || !value.isValid || !value.isValid() ){
            return;
        }
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }else{
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
}
};