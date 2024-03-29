---
title: '자바스크립트 정렬 알고리즘'
date: '2019-10-09'
tags: ['js', 'algorithm', 'sort']
---


대표적인 정렬 알고리즘을 자바스크립트 코드로 표현하고자 한다.


거품 정렬, 선택 정렬, 삽입 정렬, 합병 정렬, 퀵 정렬 순으로 정리하였다.

<br />
<br />

## 거품 정렬 (Bubble Sort)

<br />

제일 큰 수를 오른쪽으로 밀면서 정렬한다.


반복문을 2번 돌기 때문에 시간 복잡도는 O(n^2)로 효율이 좋지 못하다.


배열 길이 - 1 만큼 반복하는 이유는 2개씩 묶어서 비교를 하기 때문이다.

<br />

```js
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}
```

<br />
<br />

## 선택 정렬 (Selection Sort)

<br />

비교하려는 범위 중 제일 작은 수를 찾아 맨 앞으로 보는 방식이다.


버블 정렬과 같은 O(n^2) 시간 복잡도를 가지고 있지만, 코드가 간결하고 30 이하의 작은 수에서는 성능이 좋다.


맨 앞의 수를 최솟값으로 설정해둔 후 작은 값을 찾을 때 마다 최솟값을 변경해준다.


맨 앞의 수가 최솟값이랑 다른 경우 (제일 앞의 수가 최솟값이 아닌 경우) 위치를 바꿔준다.


비교하려는 범위의 길이가 1일 경우는 비교 할 대상이 없으므로 베열 길이 - 1 만큼만 반복해도 된다.

<br />

```js
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }

  return arr;
}
```

<br />
<br />

## 삽입 정렬 (Insertion Sort)

<br />

배열의 앞 부터 시작해 자리를 이동하며 해당 자리 앞쪽의 값과 비교하는 방식이다.


앞쪽 값과 비교할 때 자리를 한 칸씩 밀면서 값을 대입한다.


시간 복잡도는 O(n^2) 선택 정렬과 마찬가지로 작은 수에서 성능이 좋다.

<br />

```js
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const pivot = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (pivot < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = pivot;
      }
    }
  }

  return arr;
}
```

<br />
<br />

## 합병 정렬 (Merge Sort)

<br />

합병 정렬 부터는 정렬 과정이 분할과 정복 2단계로 나눠진다.


중앙을 기준으로 두 배열로 쪼갠 후 합칠 때 둘 중 작은 값 부터 먼저 삽입하는 방식이다.
재귀를 통해 해당 방식이 반복된다.


시간 복잡도는 O(nlogn)으로 성능이 좋은 편에 속한다.


정렬 시 새로운 배열이 필요하므로 추가적인 메모리가 필요하다는 단점이 있다.

<br />

```js
const merge = (left, right) => { // 병합
  const merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  while (left.length) left.shift();
  while (right.length) right.shift();

  return merged;
}

const mergeSort = (arr) => { // 분할
  if (arr.length < 2) return arr; // 재귀 탈출 조건

  const middleIndex = parseInt(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleindex);

  return merge(mergeSort(left), mergeSort(right));
}
```

<br />
<br />

## 퀵 정렬 (Quick Sort)

<br />

합병 정렬과 마찬가지로 분할, 정복의 과정이 있는 정렬이다.


이름처럼 빠르며, 대부분의 정렬에서 퀵 정렬을 사용한다. 시간 복잡도는 평균적으로 O(nlogn).


배열의 특정 값을 기준으로 이보다 작은 값들로 구성된 배열, 큰 값들로 구성된 배열로 나눈 후 합치는 방식이다.


최악의 경우가 존재하는데, 선택한 값들이 항상 최소이거나 최대일 경우이다. 이 때 시간 복잡도는 O(n^2)이나 확률이 희박하다.

<br />

```js
const quickSort = (arr) => {
  if (arr.length < 2) return arr; // 재귀 탈출 조건

  const pivot = arr[0]; // 기준점을 첫번 째 값으로 선정했다.

  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
```

<br />
<br />

## ㅇ 참고 문서

<br />

* <https://www.zerocho.com/category/Algorithm/>
