import { Pipe } from 'angular-core';

/*
  # Description:

  Truncates the last word

  # Usage:
  ```
  <span>{{ resume.name | nolast }}</div>
  ```
*/
@Pipe({ name: 'nolast' })
export class NoLastPipe {
  transform (value, args) {
    if (value) {
      value = value.split(' ');
      return value.splice(0, (value.length - 1)).join(' ');
    }
  }
}
