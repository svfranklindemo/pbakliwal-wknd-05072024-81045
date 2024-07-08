export default async function decorate(block) {
  const firstChildDiv = block.querySelector('div:first-child');
  const innerChildDiv = firstChildDiv.querySelector('div');
  firstChildDiv.classList.add('godrej-container');
  innerChildDiv.classList.add('content');
  const secondChildDiv = firstChildDiv.querySelector('div:second-child');
  if(secondChildDiv){
    secondChildDiv.classList.add("second-content-block")
  }
}
