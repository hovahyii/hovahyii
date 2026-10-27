"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function HmsCoreGuideContent() {
  return (
    <div className="prose lg:prose-xl max-w-none text-slate-900 dark:text-slate-100 pb-20">
      {/* Hero Banner Section */}
      <div className="mb-12 p-8 md:p-12 rounded-[2.5rem] border border-red-200 dark:border-red-900/60 bg-gradient-to-br from-red-50/80 via-white to-slate-50 dark:from-red-950/30 dark:via-slate-900 dark:to-slate-900 shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-bold tracking-widest uppercase mb-6">
            <span>📱</span>
            <span>Huawei Mobile Services • Android Developer Playbook</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-slate-900 dark:text-white leading-[1.15] tracking-tight">
            The Ultimate Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 dark:from-red-400 dark:via-rose-400 dark:to-amber-400">HMS Core Integration</span> for Android Apps
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            From <strong>AppGallery Connect</strong> console setup and SHA-256 fingerprinting to <strong>Android Studio Gradle scripts</strong>, code initialization, and version compatibility matrices — here is your complete, battle-tested integration roadmap.
          </p>

          {/* Quick Stat Pill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-red-600 dark:text-red-400 font-bold block text-base">⚙️ AGConnect</span>
              APIs &amp; Config JSON
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-blue-600 dark:text-blue-400 font-bold block text-base">🐘 Gradle 7/8+</span>
              agcp 1.9.x Integration
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-amber-600 dark:text-amber-400 font-bold block text-base">🔑 SHA-256</span>
              Keytool &amp; Keystores
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-base">🌐 GMS + HMS</span>
              Dual Coexistence Ready
            </div>
          </div>
        </div>

        {/* Ambient Blur circles */}
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-red-500/10 dark:bg-red-500/15 rounded-full -mr-28 -mt-28 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full -ml-28 -mb-28 blur-[100px] pointer-events-none"></div>
      </div>

      {/* Intro Hook */}
      <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-normal">
        If you are distributing an Android application internationally or targeting the massive Huawei smartphone user base in China, Southeast Asia, and Europe, relying solely on <strong>Google Mobile Services (GMS)</strong> is no longer enough. On modern Huawei devices, <strong>HMS Core (Huawei Mobile Services)</strong> is the engine powering push notifications, analytics, location, account authentication, and in-app payments.
      </p>
      <p>
        In my previous post, we walked through <Link href="/blog/how-to-publish-app-into-appgallery-store" className="text-red-600 dark:text-red-400 underline font-semibold">How to Publish Your App into AppGallery Store</Link>. Today, we dive under the hood into the technical developer side: how to smoothly wire up the <strong>HMS Core SDK</strong> in Android Studio without breaking your existing codebase or build pipeline.
      </p>

      {/* Hero Image */}
      <div className="my-10 flex flex-col items-center">
        <Image
          src="/blog/hms-core/hms-core-hero.jpg"
          alt="Huawei HMS Core Android App Integration Overview"
          width={1080}
          height={600}
          className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
          priority
        />
        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
          HMS Core modular architecture: Push, Analytics, Map, Account, In-App Purchases, and ML Kit for Android apps.
        </p>
      </div>

      {/* Architecture Workflow Infographic */}
      <div className="my-12">
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white text-sm">🧭</span>
          End-to-End Integration Flowchart
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Integrating HMS Core consists of four distinct phases across the web console and your local IDE:
        </p>
        <div className="flex flex-col items-center">
          <Image
            src="/blog/hms-core/hms-integration-workflow.jpg"
            alt="HMS Core Integration 4-Stage Workflow Diagram"
            width={1080}
            height={600}
            className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
          />
          <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-3">
            The 4-stage pipeline: AGConnect Console setup &rarr; Config JSON extraction &rarr; Android Studio Gradle configuration &rarr; Runtime validation.
          </p>
        </div>
      </div>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />

      {/* PART 1 */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xl font-bold">
            01
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white m-0">
              Part 1 · AppGallery Connect (AGConnect) Console Setup
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Prerequisites on the Huawei Developer Console before writing code
            </p>
          </div>
        </div>

        <p>
          Before touching any Gradle files, your project must be registered and configured inside the Huawei Developer portal.
        </p>

        <div className="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 uppercase text-xs tracking-wider">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Action Item</th>
                <th className="py-3 px-4">Console Location</th>
                <th className="py-3 px-4">Crucial Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">1</td>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Enable Required HMS Kits</td>
                <td className="py-3 px-4"><code>My apps &rarr; Manage APIs</code></td>
                <td className="py-3 px-4">Toggle on the kits your app uses (Push, Analytics, Map, etc.). Default state may be disabled.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">2</td>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Download agconnect-services.json</td>
                <td className="py-3 px-4"><code>Project settings &rarr; General information</code></td>
                <td className="py-3 px-4">Contains <code>client_id</code>, <code>app_id</code>, and API endpoints. Re-download whenever you change APIs!</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">3</td>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Configure SHA-256 Fingerprint</td>
                <td className="py-3 px-4"><code>Project settings &rarr; App information</code></td>
                <td className="py-3 px-4">Add <strong>both</strong> debug and release certificate fingerprints, otherwise API requests will fail with <code>6003</code> error.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">4</td>
                <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Developer Identity Verification</td>
                <td className="py-3 px-4"><code>Huawei Account Settings &rarr; Identity</code></td>
                <td className="py-3 px-4">Unverified accounts are restricted from calling production HMS services and cannot distribute to AppGallery.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />

      {/* PART 2 */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xl font-bold">
            02
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white m-0">
              Part 2 · Android Studio Project &amp; Gradle Configuration
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Adding the Huawei Maven repository, AGConnect plugin, dependencies, and ProGuard rules
            </p>
          </div>
        </div>

        {/* Step A */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">A</span>
            Place <code>agconnect-services.json</code> in the Right Directory
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Copy the downloaded <code>agconnect-services.json</code> file into your <strong>app/</strong> root folder (same directory as <code>app/build.gradle</code>).
          </p>
          <div className="mt-3 p-3 bg-white dark:bg-slate-800 rounded-xl text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            MyProject/<br />
            ├── app/<br />
            │&nbsp;&nbsp; ├── <span className="text-emerald-600 dark:text-emerald-400 font-bold">agconnect-services.json</span> &nbsp;&larr; MUST be here!<br />
            │&nbsp;&nbsp; ├── build.gradle<br />
            │&nbsp;&nbsp; └── src/<br />
            ├── build.gradle<br />
            └── settings.gradle
          </div>
        </div>

        {/* Step B */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">B</span>
            Configure the Huawei Maven Repository &amp; AGConnect Plugin
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            In modern Android Studio (Gradle 7.0+ / 8.0+), repository management is usually centralized in <code>settings.gradle</code>, while older projects use the root <code>build.gradle</code>:
          </p>

          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] my-4">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700 text-xs text-slate-300 font-mono">
              <span>build.gradle (Project-level)</span>
              <span className="text-slate-400">Groovy DSL</span>
            </div>
            <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
{`buildscript {
    repositories {
        google()
        mavenCentral()
        // Huawei HMS Maven repository
        maven { url 'https://developer.huawei.com/repo/' }
    }
    dependencies {
        // AGConnect Gradle Plugin (agcp)
        classpath 'com.huawei.agconnect:agcp:1.9.1.301'
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
        maven { url 'https://developer.huawei.com/repo/' }
    }
}`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-sm flex gap-3 items-start">
            <span className="text-lg">💡</span>
            <div>
              <strong>Using Gradle 8+ with settings.gradle?</strong><br />
              If your project defines <code>dependencyResolutionManagement</code> in <code>settings.gradle</code>, add <code>maven &#123; url &apos;https://developer.huawei.com/repo/&apos; &#125;</code> inside <code>repositories &#123; ... &#125;</code> within <code>settings.gradle</code> instead.
            </div>
          </div>
        </div>

        {/* Step C */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">C</span>
            App-level <code>build.gradle</code> (Plugin &amp; Kit Dependencies)
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Apply the AGConnect plugin and declare only the HMS Kits your app actually needs:
          </p>

          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] my-4">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700 text-xs text-slate-300 font-mono">
              <span>app/build.gradle</span>
              <span className="text-slate-400">Module-level</span>
            </div>
            <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
{`plugins {
    id 'com.android.application'
    id 'com.huawei.agconnect.agcp' // Apply AGConnect plugin
}

android {
    compileSdk 34

    defaultConfig {
        applicationId "com.yourcompany.app"
        minSdk 21
        targetSdk 34
        versionCode 1
        versionName "1.0.0"
    }

    signingConfigs {
        release {
            storeFile file("your_keystore.jks")
            storePassword "your_password"
            keyAlias "your_alias"
            keyPassword "your_key_password"
            v2SigningEnabled true
        }
    }

    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    // 1. HMS Core Base SDK
    implementation 'com.huawei.hms:base:6.11.0.301'

    // 2. Push Kit (Push Notifications)
    implementation 'com.huawei.hms:push:6.11.0.300'

    // 3. HiAnalytics Kit (User Analytics)
    implementation 'com.huawei.hms:hianalytics:6.11.0.301'

    // 4. Map Kit (Map Rendering)
    implementation 'com.huawei.hms:maps:6.11.0.301'
}`}
            </pre>
          </div>
        </div>

        {/* Step D */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">D</span>
            ProGuard Rules (<code>proguard-rules.pro</code>)
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Ensure R8/ProGuard does not strip HMS reflection calls or data classes during release builds:
          </p>

          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] my-4">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700 text-xs text-slate-300 font-mono">
              <span>proguard-rules.pro</span>
              <span className="text-slate-400">Obfuscation Rules</span>
            </div>
            <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
{`# Huawei HMS Core Rules
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keepattributes SourceFile,LineNumberTable

-keep class com.huawei.hianalytics.**{*;}
-keep class com.huawei.hms.**{*;}
-keep class com.huawei.agconnect.**{*;}
-dontwarn com.huawei.hms.**`}
            </pre>
          </div>
        </div>
      </div>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />

      {/* PART 3 */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 text-xl font-bold">
            03
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white m-0">
              Part 3 · Runtime Initialization &amp; Availability Verification
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Initializing SDKs in Application subclass and checking HMS Core availability
            </p>
          </div>
        </div>

        <p>
          HMS SDKs usually initialize in your custom <code>Application</code> class. Furthermore, because your app might run on non-Huawei devices (Samsung, Xiaomi, Pixel), you should perform a runtime check for HMS Core availability.
        </p>

        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] my-6">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700 text-xs text-slate-300 font-mono">
            <span>MyApp.java / MyApp.kt</span>
            <span className="text-slate-400">Application Initialization</span>
          </div>
          <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
{`public class MyApp extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        
        // 1. Initialize HiAnalytics Instance
        HiAnalyticsInstance instance = HiAnalytics.getInstance(this);
        
        // 2. Enable automatic screen reporting (optional)
        instance.setAutoCollectionEnabled(true);
    }
}`}
          </pre>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          Make sure your custom <code>Application</code> is registered in <code>AndroidManifest.xml</code>:
        </p>

        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] my-4">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700 text-xs text-slate-300 font-mono">
            <span>AndroidManifest.xml</span>
            <span className="text-slate-400">Application Tag</span>
          </div>
          <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
{`<application
    android:name=".MyApp"
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:theme="@style/Theme.MyApp">
    ...
</application>`}
          </pre>
        </div>

        <h4 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">
          Checking HMS Core Availability at Runtime
        </h4>
        <p>
          Just like Google&apos;s <code>GoogleApiAvailability</code>, Huawei provides <code>HuaweiApiAvailability</code>. Use it to gracefully decide whether to use HMS features or fallback to GMS / web alternatives:
        </p>

        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] my-4">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700 text-xs text-slate-300 font-mono">
            <span>HmsAvailabilityHelper.java</span>
            <span className="text-slate-400">Dual Ecosystem Routing</span>
          </div>
          <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
{`int resultCode = HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(context);

if (resultCode == ConnectionResult.SUCCESS) {
    Log.d("HMS", "HMS Core is available and ready! ✅");
    // Route to HMS Push / HMS Map / Huawei Account
} else {
    Log.w("HMS", "HMS Core NOT available (code: " + resultCode + ") ❌");
    if (HuaweiApiAvailability.getInstance().isUserResolvableError(resultCode)) {
        // Prompt user to update or install HMS Core APK
        HuaweiApiAvailability.getInstance().resolveError(activity, resultCode, REQUEST_CODE);
    } else {
        // Fallback to Google Mobile Services (GMS) or generic REST API
    }
}`}
          </pre>
        </div>
      </div>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />

      {/* PART 4 */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xl font-bold">
            04
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white m-0">
              Part 4 · Extracting the SHA-256 Signature Fingerprint
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              The number one reason for HMS API authentication failure (Error 6003)
            </p>
          </div>
        </div>

        <p>
          Huawei servers strictly validate your app&apos;s digital signature against the fingerprint registered in AGConnect Console. If the SHA-256 fingerprint doesn&apos;t match the keystore currently compiling your APK, API calls return <code>6003: CERTIFICATE_FINGERPRINT_EMPTY</code> or signature mismatch errors.
        </p>

        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] my-4">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700 text-xs text-slate-300 font-mono">
            <span>Terminal / Command Prompt</span>
            <span className="text-slate-400">keytool command</span>
          </div>
          <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
{`# 1. Debug Keystore (Windows)
keytool -list -v -keystore "%USERPROFILE%\\.android\\debug.keystore" -alias androiddebugkey -storepass android -keypass android

# 1. Debug Keystore (macOS / Linux)
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

# 2. Release Keystore
keytool -list -v -keystore /path/to/your_release.jks`}
          </pre>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Find the line labeled <code>SHA-256:</code> in the output, copy the entire hex string (e.g., <code>DA:39:A3:EE:5E:6B:...</code>), and paste it into:
        </p>
        <p className="font-semibold text-slate-800 dark:text-slate-200">
          AppGallery Connect &rarr; My projects &rarr; Project settings &rarr; General information &rarr; <strong>SHA-256 certificate fingerprint</strong>.
        </p>
      </div>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />

      {/* PART 5 */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-600 dark:text-rose-400 text-xl font-bold">
            05
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white m-0">
              Part 5 · Popular HMS Core Kits Overview
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select only the modules you need for minimal APK size overhead
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm flex items-start gap-4">
            <span className="text-3xl">🔔</span>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">Push Kit</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">High-delivery notifications across all Huawei EMUI/HarmonyOS devices, even when the app process is terminated.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm flex items-start gap-4">
            <span className="text-3xl">📊</span>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">HiAnalytics Kit</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Free event tracking, user funnels, retention analysis, and automatic crash metrics on the AGConnect dashboard.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm flex items-start gap-4">
            <span className="text-3xl">🗺️</span>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">Map Kit &amp; Location Kit</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">High-performance vector maps, GPS &amp; Wi-Fi network positioning, reverse geocoding, and global turn-by-turn routing.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm flex items-start gap-4">
            <span className="text-3xl">👤</span>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">Account Kit</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">One-tap "Sign in with HUAWEI ID" with biometrics, SMS verification, and OAuth 2.0 authorization.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm flex items-start gap-4">
            <span className="text-3xl">💳</span>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">In-App Purchases (IAP) Kit</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Global monetization with credit cards, local e-wallets, carrier billing, and auto-renewing subscriptions.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm flex items-start gap-4">
            <span className="text-3xl">🤖</span>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">ML Kit (Machine Learning)</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">On-device and cloud AI vision and language APIs: OCR document scanning, text translation, face detection, and TTS.</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />

      {/* PART 6 */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 text-xl font-bold">
            06
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white m-0">
              Part 6 · Android Studio &amp; Gradle Version Compatibility Matrix
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Demystifying AGP, Gradle, JDK, and AGConnect plugin version pairings
            </p>
          </div>
        </div>

        <p>
          Many developers hit obscure build errors like <code>Plugin [id: &apos;com.huawei.agconnect.agcp&apos;] was not found</code> or JDK incompatibility issues. While Huawei doesn&apos;t impose a strict Android Studio version, the constraint stems from <strong>agcp 1.9.x</strong> requiring <strong>AGP (Android Gradle Plugin) 7.0+</strong>.
        </p>

        <div className="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 uppercase text-xs tracking-wider">
              <tr>
                <th className="py-3 px-4">Android Studio</th>
                <th className="py-3 px-4">AGP</th>
                <th className="py-3 px-4">Gradle</th>
                <th className="py-3 px-4">JDK</th>
                <th className="py-3 px-4 text-center">HMS Core Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-3 px-4 font-medium">4.2 (2021.1)</td>
                <td className="py-3 px-4">4.2</td>
                <td className="py-3 px-4">6.7+</td>
                <td className="py-3 px-4">JDK 8 / 11</td>
                <td className="py-3 px-4 text-center text-red-500 font-semibold">❌ Not Recommended (agcp 1.6 required)</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-3 px-4 font-medium">Arctic Fox (2020.3.1)</td>
                <td className="py-3 px-4">7.0</td>
                <td className="py-3 px-4">7.0+</td>
                <td className="py-3 px-4">JDK 11</td>
                <td className="py-3 px-4 text-center text-emerald-600 dark:text-emerald-400 font-semibold">✅ Minimum Supported Baseline</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-3 px-4 font-medium">Bumblebee / Dolphin</td>
                <td className="py-3 px-4">7.1 – 7.3</td>
                <td className="py-3 px-4">7.2 – 7.4+</td>
                <td className="py-3 px-4">JDK 11</td>
                <td className="py-3 px-4 text-center text-emerald-600 dark:text-emerald-400 font-semibold">✅ Stable</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="py-3 px-4 font-medium">Flamingo (2022.2.1)</td>
                <td className="py-3 px-4">8.0</td>
                <td className="py-3 px-4">8.0+</td>
                <td className="py-3 px-4">JDK 17</td>
                <td className="py-3 px-4 text-center text-emerald-600 dark:text-emerald-400 font-semibold">✅ Fully Compatible</td>
              </tr>
              <tr className="bg-emerald-500/10 hover:bg-emerald-500/15">
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Hedgehog (2023.1.1)</td>
                <td className="py-3 px-4 font-semibold">8.2</td>
                <td className="py-3 px-4 font-semibold">8.2+</td>
                <td className="py-3 px-4 font-semibold">JDK 17</td>
                <td className="py-3 px-4 text-center font-bold text-emerald-600 dark:text-emerald-400">⭐ Highly Recommended</td>
              </tr>
              <tr className="bg-blue-500/10 hover:bg-blue-500/15">
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Iguana / Koala / Ladybug</td>
                <td className="py-3 px-4 font-semibold">8.3 – 8.7+</td>
                <td className="py-3 px-4 font-semibold">8.4 – 8.9+</td>
                <td className="py-3 px-4 font-semibold">JDK 17 / 21</td>
                <td className="py-3 px-4 text-center font-bold text-blue-600 dark:text-blue-400">🚀 Production Standard</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pro Tip Callout */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 my-6">
          <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
            🔌 Optional Time-Saver: HMS Toolkit Plugin
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Huawei provides an official Android Studio plugin called <strong>HMS Toolkit</strong>. It automatically configures Maven repositories, downloads <code>agconnect-services.json</code> directly from your account, injects dependencies with a single click, and checks for configuration issues:
          </p>
          <div className="p-3 bg-[#0d1117] rounded-xl text-xs font-mono text-slate-200">
            Android Studio &rarr; Settings/Preferences &rarr; Plugins &rarr; Search "HMS Toolkit" &rarr; Install &amp; Restart IDE
          </div>
        </div>

        {/* Warning Callout */}
        <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-900 dark:text-red-200 my-6">
          <h4 className="text-base font-bold text-red-900 dark:text-red-100 flex items-center gap-2 mb-2">
            ⚠️ Don&apos;t Confuse the IDEs: Android Studio vs. DevEco Studio
          </h4>
          <p className="text-sm">
            <strong>Android Studio</strong> is used for Android application development incorporating HMS Core.<br />
            <strong>DevEco Studio</strong> is designed specifically for <em>HarmonyOS / HarmonyOS NEXT</em> native ArkTS applications. If you are building or maintaining an Android APK, stick to Android Studio!
          </p>
        </div>
      </div>

      <hr className="my-12 border-slate-200 dark:border-slate-800" />

      {/* PART 7 */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400 text-xl font-bold">
            07
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white m-0">
              Part 7 · Essential Production Tips &amp; Gotchas
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Hard-won lessons from real-world deployments
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span>🌏</span> Handling Global vs. Mainland China Devices
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Devices sold in mainland China have the HMS Core system service pre-installed by default. However, international Huawei devices or non-Huawei Android phones running your APK need the <strong>HMS Core APK</strong> installed. Always check <code>HuaweiApiAvailability</code> and show a prompt to install HMS Core if it&apos;s missing.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span>🔀</span> Multiple Build Flavors (Huawei vs. Google Play)
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              If your app maintains both Google Play and AppGallery releases, use Gradle product flavors (e.g. <code>flavorDimensions &quot;store&quot;</code> with <code>google</code> and <code>huawei</code>). Place flavor-specific <code>agconnect-services.json</code> inside <code>src/huawei/</code> and Google&apos;s <code>google-services.json</code> inside <code>src/google/</code>.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0 flex items-center gap-2">
              <span>🔒</span> Keep <code>agconnect-services.json</code> Out of Public Repos
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              The JSON file contains sensitive client secrets, OAuth client IDs, and package names. Add <code>agconnect-services.json</code> to your <code>.gitignore</code> and inject it during CI/CD pipelines via base64 environment secrets.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion & Wrap up */}
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl my-12">
        <h3 className="text-2xl font-bold mb-3 text-white">Summary &amp; Next Steps</h3>
        <p className="text-slate-300 text-base leading-relaxed mb-6">
          Integrating HMS Core is straightforward once you understand how the AppGallery Connect console, SHA-256 signatures, and Gradle build system mesh together. By supporting both HMS Core and GMS, your Android app can achieve complete global device coverage without sacrificing high-performance push notifications or seamless in-app purchases.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link
            href="/blog/how-to-publish-app-into-appgallery-store"
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-colors"
          >
            Read AppGallery Publishing Guide &rarr;
          </Link>
          <a
            href="https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/introduction-0000001050040651"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
          >
            Official HMS Core Documentation ↗
          </a>
        </div>
      </div>

      {/* Attribution footer */}
      <div className="text-xs text-slate-400 dark:text-slate-500 text-center pt-8 border-t border-slate-200 dark:border-slate-800">
        Reference guide synthesis based on Huawei Developer Community research by 薄冰哥小余 &amp; Hovah Yii • Updated October 2026.
      </div>
    </div>
  );
}
