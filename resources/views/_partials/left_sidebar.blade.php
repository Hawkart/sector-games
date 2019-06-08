<!-- Left Sidebar Menu -->
<div class="fixed-sidebar-left">
	<ul class="nav navbar-nav side-nav nicescroll-bar">
		<li class="navigation-header">
			<span>Popular games</span> 
			<i class="zmdi zmdi-more"></i>
		</li>
        @if (count($popularGames) > 0)
            @foreach ($popularGames as $popularGame)
                <li>
					<a href="/games/{{ $popularGame->id }}">
                        <div class="pull-left"><img src="<?=Storage::disk('public')->url($popularGame->logo)?>" width="17" class="zmdi mr-20" title="{{ $popularGame->title }}"/><span class="right-nav-text">{{ str_limit($popularGame->title, 20) }}</span></div><div class="clearfix"></div>
                    </a>
				</li>
            @endforeach
         @endif
        <li>
			<a href="{{ route('games') }}">
                <div class="pull-left"><i class="zmdi zmdi-filter-list mr-20"></i><span class="right-nav-text">show all</span></div><div class="clearfix"></div>
            </a>
		</li>
		<li><hr class="light-grey-hr mb-10"/></li>
		<li class="navigation-header">
			<span>left menu</span> 
			<i class="zmdi zmdi-more"></i>
		</li>
        
        <?/*<li>
            <router-link to="/" class="">Home</router-link>
        </li>
        <li>
            <router-link to="/foo" class="">Foo</router-link>
        </li>
        <li>
            <router-link to="/bar" class="">Bar</router-link>
        </li>
        <li>
            <router-link to="/rooms" class="">Rooms</router-link>
        </li>*/?>

        <li>
			<a href="{{ route('games') }}"><div class="pull-left"><i class="zmdi zmdi-book mr-20"></i><span class="right-nav-text">games</span></div><div class="clearfix"></div></a>
		</li>
        <li>
			<a href="{{ route('fights') }}"><div class="pull-left"><i class="zmdi zmdi-book mr-20"></i><span class="right-nav-text">fights</span></div><div class="clearfix"></div></a>
		</li>
        <li>
			<a href="documentation.html"><div class="pull-left"><i class="zmdi zmdi-book mr-20"></i><span class="right-nav-text">contacts</span></div><div class="clearfix"></div></a>
		</li>
        <li>
			<a href="documentation.html"><div class="pull-left"><i class="zmdi zmdi-book mr-20"></i><span class="right-nav-text">FAQ</span></div><div class="clearfix"></div></a>
		</li>
	</ul>
</div>
<!-- /Left Sidebar Menu -->