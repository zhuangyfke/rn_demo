package com.rn_demo;

import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;


public class ExampleReactModule extends ReactContextBaseJavaModule {

    public ExampleReactModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ExampleReactModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> constants = new HashMap<>();
        constants.put("test", "安卓原生常量");
        return constants;
    }

    @ReactMethod
    public void handleMessage(String msg) {
        Toast.makeText(getReactApplicationContext(), "来至RN数据:" + msg, Toast.LENGTH_LONG).show();
        Log.e("RNMessage", "从RN传递过来的内容:" + msg);
    }

    @ReactMethod
    public void handleCallback(String msg, Callback callback) {
        Toast.makeText(getReactApplicationContext(), "安卓回调数据给RN", Toast.LENGTH_LONG).show();
        msg = msg + "-handleCallback-安卓回调";
        callback.invoke(msg);
    }

    @ReactMethod
    public void handlePromise(String msg, Promise promise) {
        try {
            Toast.makeText(getReactApplicationContext(), "handlePromise", Toast.LENGTH_LONG).show();
            msg = msg + "-handlePromise-安卓回调";
            promise.resolve(msg);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void jumpToMyActivity() {
        Intent intent = new Intent(getCurrentActivity(), MyActivity.class);
        getCurrentActivity().startActivity(intent);
    }

}
