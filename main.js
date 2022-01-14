const items = document.querySelector('.items');
const form = document.querySelector('.new-form')
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

// Why? 폼이라는 요소는 값이 summit으로 동일 하기 때문에 굳이 따로따로 지정을 안해도 된다. + 폼 안에 있는 요소도 submit 값을 받아옴. (html type을 통해 바꿀 수 있음.)
form.addEventListener('submit', (event) => {
  event.preventDefault(); // 이 함수는 브라우저 탑재되어 있는 장치를 없애준다. (에를 들어 submit는 전송하기 때문에 브라우저 화면이 바뀌는데 이 코드를 써서 그 장치를 삭제시킴 )
  onAdd();
  console.log(event)
});

// 함수를 미리 만듦
function onAdd() {
  const text = input.value; // 사용자가 input 값을 받아온다.
  if (text === '') { // 텍스트가 아무것도 없으면 리턴, 밑에 포커스를 쓴 이유는 input 다시 포커스가 되게끔
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item); //appendChild는 <li></li>라는 코드를 생성함.
  item.scrollIntoView({block: 'center'}) // 리스트의 내용이 많을 때 방금 작성한 리스트로 스크롤 위치가 이동함.
  input.value = '';  //인풋을 초기화 한다.
  input.focus();
};

let id =0; //UUID

function createItem(text) {
  const itemRow = document.createElement('li'); //createElement는 <li></li>라는 코드를 생성함.
  itemRow.setAttribute('class','item__row');  //setAttribute의 방식으로 item__row의 이름을 가진 class를 생성한다.
  itemRow.setAttribute('data-id', id); 

  //why? 이것을 바꾸지 전 코드는 맨 밑에 있음. 최대한 간소화 시켜주기 위해서. id값을 받은 이유는 고유의 아이디값을 넣어 순서대로 들어가게 하기 위함
  itemRow.innerHTML =`
  <div class="item" data-id=${id}>
    <span class="itme__name">${text}</span>
    <button class="item__delete" data-target-id =${id}>
      <i class="fas fa-trash-alt" data-target-id =${id}></i>
    </button>
  </div>
  <div class="item__divider"></div>
  `
  id++;
  return itemRow
};


items.addEventListener('click', (event)=>{
  const targetId = event.target.dataset.targetId;
  console.log(targetId)
  if(targetId){
    const targetDeleted = document.querySelector(`.item__row[data-id="${targetId}"]`);
    targetDeleted.remove();
  }
});





  // const item = document.createElement('div');
  // item.setAttribute('class','item');

  // const name = document.createElement('span');
  // name.setAttribute('class','item__name');
  // name.innerText = text;

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute('class','item__delete')
  // deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // deleteBtn.addEventListener('click', ()=>{
  //   items.removeChild(itemRow)
  // });

  // const itemDivder = document.createElement('div');
  // itemDivder.setAttribute('class','item__divider');

  // item.appendChild(name);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivder)