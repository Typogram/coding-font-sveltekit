/* tournament_init */
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}

tournament.setValue(shuffle(fonts.data));
tournament_progress.setValue(0);
fetch_quesiton.trigger({
  onSuccess: function () {}
});

/* choose */
let q = fetch_quesiton.data;
let result = q.compare[1];
q.parent.splice(q.index, 1, result);
tournament.setValue(q.parent);
fetch_quesiton.trigger();

/* filter */
const result = mono_fonts.filter((item) =>
  item.family.toLowerCase().includes(search.value.toLowerCase())
);
return result;

/* fetch question */
function create_bracket(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    if (i + 1 < arr.length) {
      let tempArr = [arr[i], arr[i + 1]];
      result.push(tempArr);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function get_question(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i];
    if (Array.isArray(tempArr)) {
      return {
        compare: tempArr,
        parent: arr,
        index: i
      };
    }
  }
  return false;
}

tournament_progress.setValue(tournament_progress.value + 1);

let tempArr = tournament.value;
if (tempArr.length == 1 && !Array.isArray(tempArr)) {
  utils.showNotification({
    title: 'You made a choice',
    description: tempArr[0].family,
    notificationType: 'success',
    duration: 10
  });
  return false;
} else {
  let question = get_question(tempArr);
  if (question != false) {
    return question;
  } else {
    tempArr = create_bracket(tempArr);
    tournament.setValue(tempArr);
    let question = get_question(tempArr);
    return question;
  }
}
