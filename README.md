
# react-native-elapsed-time

## Getting started

`$ npm install react-native-elapsed-time --save`

### Mostly automatic installation

`$ react-native link react-native-elapsed-time`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.pkgarg.elapsedtime.RNElapsedTimePackage;` to the imports at the top of the file
  - Add `new RNElapsedTimePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-elapsed-time'
  	project(':react-native-elapsed-time').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-elapsed-time/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-elapsed-time')
  	```



## Usage
```javascript
import RNElapsedTime from 'react-native-elapsed-time';

// Returns time in millisecond
...
const elapsedTime = await RNElapsedTime.getRelativeTime();
```
