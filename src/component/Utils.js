
export function parseMarkDown(md){
  const data = md.split("-------------------[[separate]]------------------------");

  return {json:JSON.parse(data[0]),md:data[1]};
}
