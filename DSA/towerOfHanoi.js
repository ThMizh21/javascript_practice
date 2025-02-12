function towersOfHanoi(n, start, end, temp) {
    if (n === 1) {
      console.log(`Move disk 1 from ${start} to ${end}`);
      return;
    }
    towersOfHanoi(n - 1, start, temp, end);
    console.log(`Move disk ${n} from ${start} to ${end}`);
    towersOfHanoi(n - 1, temp, end, start);
  }
  towersOfHanoi(3, '1', '2', '3');