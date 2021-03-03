function addzero(m) {
	return m < 10 ? '0' + m : m;
}

function currentTime(value = 'YYYY-MM-DD HH:ii:ss') { 
  let b = '';

  const a = new Date();
  const year = a.getFullYear();
	const month= addzero(a.getMonth() + 1);
	const day = addzero(a.getDate());
  const hour = addzero(a.getHours());
  const minutes = addzero(a.getMinutes());
  const seconds = addzero(a.getSeconds());

  b = value.replace(/YYYY/gi,year);
  b = b.replace(/MM/gi,month);
	b = b.replace(/DD/gi,day);
	b = b.replace(/HH/gi,hour);
  b = b.replace(/ii/gi, minutes);
  b = b.replace(/ss/gi,seconds);
  return b;
}

export {
  currentTime
};
